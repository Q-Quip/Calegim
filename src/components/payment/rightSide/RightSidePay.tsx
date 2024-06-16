import React from "react";
import ProductsList from "./productsList/ProductsList";
import styles from './RightSidePay.module.scss' 
import TotalBill from "./totalBill/TotalBill";
import { InputLine } from "../../ui/inputCardData/InputLine";

const RightSidePay = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void  => {
        e.preventDefault();
        if (e.target instanceof HTMLFormElement) {
            const form = e.target;
            const formData = new FormData(form);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
        }
    }
    return(
        <section className={styles.container}>
            <ProductsList/>
            <form 
                className={styles.discount}
                onSubmit={handleSubmit}
                method="post"
            >
                <InputLine
                    type="text" 
                    label="Discount code" 
                    htmlFor="userInputDiscountCode"
                    />
                <button>
                    <span>Apply</span>
                </button>
            </form>
            <TotalBill />
        </section>
    )
}


export default RightSidePay;