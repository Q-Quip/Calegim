import { createSlice } from "@reduxjs/toolkit";
import { ManageProduct } from "./productsLogic";

const initialState:ManageProduct = { 
    cardImg: [],
    cardInfo: [],
};
const productToBuy = createSlice({
    name: 'manageProducts',
    initialState,
    reducers: {
        pushImgCard(state, action) {
            const newItem  = action.payload;
            const isExisting = state.cardImg.some(card => card.src === newItem.src);
            if(!isExisting) {
                state.cardImg.push({
                    src: newItem.src,
                    alt: newItem.alt,
                    title: newItem.title,
                })
            }
        },
        pushTextCard(state,action) {
            const newItem  = action.payload;
            const isExisting = state.cardInfo.some(card => card.productTitle === newItem.productTitle);
            if(!isExisting) {
                state.cardInfo.push({
                    productTitle: newItem.productTitle,
                    price: newItem.price,
                    count: 1,
                })
            } else {
                const targetElement = state.cardInfo.find(card => card.productTitle === newItem.productTitle);
                if (targetElement) {
                    targetElement.count++;
                }
            }
        },
        deleteCard(state, action) {
            const requiredCard = action.payload;
            if(requiredCard) {
                state.cardImg = state.cardImg.filter(card => card.src !== requiredCard.src);
                state.cardInfo = state.cardInfo.filter(card => card.productTitle !== requiredCard.productTitle);
            }
        },
        deleteAmoutCard(state, action) {
            const requiredCard  = action.payload;
            const isExisting = state.cardInfo.find(card => card.productTitle === requiredCard.productTitle);

            if(isExisting) {
                if(isExisting.count > 1) {
                    isExisting.count--;
                } else {
                    state.cardImg = state.cardImg.filter(card => card.src !== requiredCard.src);
                    state.cardInfo = state.cardInfo.filter(card => card.productTitle !== requiredCard.productTitle);
                }
            }
        },
        plusAmoutCard(state, action) {
            const requiredCard  = action.payload;
            const isExisting = state.cardInfo.find(card => card.productTitle === requiredCard);
            if(isExisting) {
                isExisting.count++;
            }
        },
    }
})

export const actionsBuy = productToBuy.actions;
export default productToBuy.reducer;
