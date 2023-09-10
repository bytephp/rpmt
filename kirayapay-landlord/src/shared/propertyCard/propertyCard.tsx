import React from "react";
import "./style.css";
import { HiOutlinePhoto, HiOutlinePlusCircle } from "react-icons/hi2";
import { ActionLink } from "@/components/shared";

export const PropertyCard = (): JSX.Element => {
    const href = "/properties/1";
    return (
        <ActionLink to={href}>
            <div className="property-card hover:shadow-lg">
                <div className="property-details">
                    <div className="property-image-wrapper">
                        <HiOutlinePhoto className="SVG" />

                        {/* <img className="property-image" alt="Div" src="/img/avatars/thumb-8.jpg" /> */}
                    </div>
                    <div className="details-wrapper">
                        <div className="details-description">
                            <div className="heading">Burbank, CA 91505, 405</div>
                            <div className="sub-heading">banglore, CO 65454</div>
                        </div>
                    </div>
                </div>
                <div className="button-wrapper">
                    <button className="button">
                        <HiOutlinePlusCircle className="SVG" />
                        <div className="span">
                            <div className="show-units-rooms">SHOW UNITS / ROOMS</div>
                        </div>
                    </button>
                </div>
            </div>
        </ActionLink>
    );
};
