import React, { useState, useEffect } from "react";

export default function Filtrage({ data, data2 }) {

    console.log(data2)

    const MinKm = parseInt(data2.MinKm)
    const MaxKm = parseInt(data2.MaxKm)
    const dénivelé = parseInt(data2.dénivelé)
    const typeofcircuit = data2.typeofcircuit

    const filtre = (item) => {

        let IsKm = false
        let IsDénivelé = false
        let IsTypeofcircuit = false

        if (item.distance >= MinKm && item.distance <= MaxKm || isNaN(MinKm) && item.distance <= MaxKm || item.distance >= MinKm && isNaN(MaxKm) || isNaN(MinKm) && isNaN(MaxKm)) {

            IsKm = true

        }

        if (item.dénivelé == dénivelé || dénivelé == 0) {

            IsDénivelé = true

        }

         if (item.typeofcircuit == typeofcircuit || typeofcircuit == "0") {

            IsTypeofcircuit = true

        }

        if (IsKm == true && IsDénivelé == true && IsTypeofcircuit == true) {

            return true;

        } else {

            return false

        }

    }

    return (

        <div>

            {

                data.filter(filtre).map(item =>

                    <>
                        <h1 key={item.id} > {item.id}: {item.circuitname} [{item.dénivelé}] [{item.distance}Km] {item.typeofcircuit} </h1>
                    </>

                )

            }

        </div>

    )

};