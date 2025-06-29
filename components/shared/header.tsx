import React from "react";
import Image from "next/image";
import { Container } from "./container";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b border-gray-100", className)}>
      <Container className="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" width={100} height={100} alt="Logo" />
          <div>
            <h1 className="text-2xl uppercase font-black">Fetta Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">love from Itally</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline">Войти</Button>

          <div>
            <Button className="group relative cursor-pointer">
              <b>520 ₽</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
