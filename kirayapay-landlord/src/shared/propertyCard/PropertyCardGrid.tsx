import React from "react";
import { PropertyCard } from "./PropertyCard";
import "./style-grid.css";

export const PropertyCardGrid = (): JSX.Element => {
    return (
        <div className="grid grid-cols-4 gap-4 w-full">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
        </div>
    );
};
