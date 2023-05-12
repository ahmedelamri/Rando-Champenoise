import React, { useState, useEffect } from "react";

export default function Filtrage({ data, data2 }) {

    console.log(data2)

    const MinKm = data2.MinKm
    const MaxKm = data2.MaxKm
    const dénivelé = data2.dénivelé
    const typeofcircuit = data2.typeofcircuit

    const filtre = (item) => {

        console.log(item)

        if (MinKm == null && MaxKm == null || MinKm == null && MaxKm >= item.distance || MinKm <= item.distance && MaxKm == null || MinKm <= item.distance && MaxKm >= item.distance) {

            if (item.dénivelé == dénivelé || dénivelé == null) {

                if (item.typeofcircuit == typeofcircuit || typeofcircuit == null) {

                     return true;

                }

            }

        }

        return false;

    }

    return (

        <div>

            {

                data.filter(filtre).map(item =>

                    <>
                        <h1 key={item.id} > {item.id}: {item.circuitname} [{item.dénivelé}] [{item.distance}Km] </h1>
                    </>

                )

            }

        </div>

    )

};