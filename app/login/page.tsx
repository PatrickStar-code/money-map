import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex flex-col  justify-center  p-8 max-w-[550px] mx-auto">
        <Image
          src="/logo.png"
          alt="logo"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold mb-3">Bem Vindo</h1>
        <p className="text-muted-foreground mb-8">
          A Money Map é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button className="mt-4 " variant={"outline"}>
            <LogInIcon className="mr-2 " />
            Fazer Login ou Criar Conta
          </Button>
        </SignInButton>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/backgroundLogin.png"
          alt="login"
          fill
          className="objectCover"
        />
      </div>
    </div>
  );
}