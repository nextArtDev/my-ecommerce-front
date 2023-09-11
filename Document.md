## Container

```typescript
<div className="mx-auto max-w-7xl" > </div>
```

## Redux Toolkit 
Incrementing example:

```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState = {
  value: 0,
} as CounterState;

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} = counter.actions;
export default counter.reducer;

```

## Query String

we need query string to apply filters

```typescript
import { Product } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};
```

## Zarinpal

<https://www.npmjs.com/package/zarinpal-pay>

npm i zarinpal-pay

create() // ایجاد تراکنش
verify() // تایید تراکنش
unverified() // ليست پرداخت هاي موفق اخیر

import  ZarinpalPayment from  "zarinpal-pay";
const zarinpal = new ZarinpalPayment (Merchant, isTomam ,isSandbox);


 برای ایجاد تراکنش از متد create استفاده کنید

```typescript

try{

 const createpay = await zarinpal.create({
 amount: 100000,
 callback_url: "http://localhost:8080/callback",
 mobile: "09339993377",
 email: "my@site.com",
 description: "توضیحات تراکنش",
 order_id: "3010",
 });

}catch (err) {
 console.log(err);
}


```