import React from "react";
import "./style.css";
import { HiOutlineHome, HiOutlineHomeModern, HiOutlineBuildingOffice, HiOutlineKey } from "react-icons/hi2";
import { BsBuildings } from "react-icons/bs";

export const PropertyAddress = () => (
    <div className="div">
        <div className="form">
            <div className="class">
                <p className="heading-which-best">Which best describes your property?</p>
                <p className="p">This allows us to better tailor your experience. You can edit this information later.</p>
                <div className="div-hrznskhofn">
                    <div className="class-2">
                        <div className="label">
                            <div className="class-3">
                                <HiOutlineHome className="SVG-margin" />
                                <div className="overlap-group">
                                    <div className="span">
                                        <div className="text-wrapper-2">Single Family House</div>
                                    </div>
                                    <div className="div-wrapper">
                                        <div className="text-wrapper-3">Standalone residence</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="label-2">
                            <div className="class-4">
                                <HiOutlineHomeModern className="img" />
                                <div className="overlap-group-2">
                                    <div className="span">
                                        <div className="text-wrapper-2">Townhouse</div>
                                    </div>
                                    <div className="span-2">
                                        <div className="text-wrapper-3">Individual unit</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="label-3">
                            <div className="class-5">
                                <HiOutlineHome className="SVG-margin-2" />
                                <div className="overlap-group-3">
                                    <div className="span">
                                        <div className="text-wrapper-2">Condominium</div>
                                    </div>
                                    <div className="span-3">
                                        <div className="text-wrapper-3">Individual unit</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="label-4">
                            <div className="class-6">
                                <BsBuildings className="SVG-margin-3" />
                                <div className="overlap-group-4">
                                    <div className="span-4">
                                        <div className="text-wrapper-2">Small Multi-family</div>
                                    </div>
                                    <div className="span-2">
                                        <p className="text-wrapper-3">2-4 units at the property</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="label-5">
                            <div className="class-7">
                                <HiOutlineBuildingOffice className="SVG-margin-4" />
                                <div className="overlap-group-5">
                                    <div className="span">
                                        <div className="text-wrapper-2">Apartment Building</div>
                                    </div>
                                    <div className="span-2">
                                        <p className="text-wrapper-3">5+ units at the property</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="label-6">
                            <div className="class-8">
                                <HiOutlineKey className="SVG-margin-5" />
                                <div className="overlap-group-6">
                                    <div className="span-5">
                                        <div className="text-wrapper-2">Other Types</div>
                                    </div>
                                    <div className="span-2">
                                        <div className="text-wrapper-3">Mixed-Use, RV Park, etc.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="class-9">
                        <div className="label-7">
                            <p className="text-wrapper-4">Will you have room rentals?</p>
                            <div className="text-wrapper-5">Learn More</div>
                        </div>
                        <div className="class-10">
                            <div className="label-8">
                                <div className="div-wrapper-2">
                                    <div className="text-wrapper-6">Yes</div>
                                </div>
                                <img className="label-SVG" alt="Label SVG" src="label-SVG.svg" />
                            </div>
                            <div className="label-9">
                                <div className="div-wrapper-2">
                                    <div className="text-wrapper-6">No</div>
                                </div>
                                <img className="label-SVG" alt="Label SVG" src="label-SVG-2.svg" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
);
