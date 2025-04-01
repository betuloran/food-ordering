import Carousel from "@/components/ui/Carousel";
import Campaigns from "../../components/Campaigns";
import MenuWrapper from "../../components/product/MenuWrapper";
import About from "../../components/About";
import Reservation from "../../components/Reservation";
import Customers from "@/components/customers/Customers";
import React from "react";

const Index = () => {
    return (
        <React.Fragment>
            <Carousel />
            <Campaigns />
            <MenuWrapper />
            <About />
            <Reservation />
            <Customers />
        </React.Fragment>

    );
};

export default Index;