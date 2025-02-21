"use client";

import { TotaliBalancer } from "@/types/recipe";
import { ProgressBar } from "./ProgressBar";
import { useEffect, useState } from "react";

interface BalancerProps {
  totali: TotaliBalancer;
}

export function Balancer({ totali }: BalancerProps) {
  const [totaliBalancer, setTotaliBalancer] = useState<TotaliBalancer>();
  console.log("totaliBalancer:", { totaliBalancer });

  useEffect(() => {
    setTotaliBalancer(totali);
  }, [totali]);

  return (
    <div className="flex justify-center">
      <div className="flex justify-center border-[1px] rounded-lg w-[350px] md:w-[520px] shadow-lg p-4">
        <div className="flex flex-col items-end ">
          <ProgressBar
            valueBalancing="Zuccheri"
            progress={
              totaliBalancer ? totaliBalancer.percentualeTotaleZuccheri : 0
            }
            min={10}
            max={20}
          />
          <ProgressBar
            valueBalancing="Grassi"
            progress={
              totaliBalancer ? totaliBalancer.percentualeTotaleGrassi : 0
            }
            min={10}
            max={20}
          />
          <ProgressBar
            valueBalancing="SLNG"
            progress={totaliBalancer ? totaliBalancer.percentualeTotaleSLNG : 0}
            min={10}
            max={20}
          />
          <ProgressBar
            valueBalancing="Altri Solidi"
            progress={
              totaliBalancer ? totaliBalancer.percentualeTotaleAltriSolidi : 0
            }
            min={10}
            max={20}
          />
          <ProgressBar
            valueBalancing="Neutri & Basi"
            progress={
              totaliBalancer ? totaliBalancer.percentualeTotaleNeutriOBasi : 0
            }
            min={10}
            max={20}
          />
          <ProgressBar
            valueBalancing="Solidi Totali"
            progress={
              totaliBalancer ? totaliBalancer.percentualeTotaleSolidiTotali : 0
            }
            min={10}
            max={20}
          />
          <ProgressBar
            valueBalancing="POD"
            progress={totaliBalancer ? totaliBalancer.percentualeTotalePOD : 0}
            min={10}
            max={20}
          />
          <ProgressBar
            valueBalancing="PAC"
            progress={totaliBalancer ? totaliBalancer.percentualeTotalePAC : 0}
            min={10}
            max={20}
          />
        </div>
      </div>
    </div>
  );
}
