import { createSlice } from "@reduxjs/toolkit";

const userServicesSlice = createSlice({
    name: 'userServices',
    initialState: {
        userServices: [
            {
                id: 1024,
                text: 'Прием (осмотр, консультация) врача-онколога первичный',
                price: 1200,
                deadlinePayment: '13.01.2023',
                isPaid: false,
            },
            {
                id: 1025,
                text: 'Исследование уровня антигена аденогенных раков CA 72-4 в крови',
                price: 900,
                deadlinePayment: '11.01.2023',
                isPaid: false,
            },
            {
                id: 1026,
                text: 'Биопсия непальпируемых новообразований молочной железы аспирационная вакуумная под контролем ультразвукового исследования',
                price: 4500,
                deadlinePayment: '22.03.2023',
                isPaid: false,
            },
            {
                id: 1027,
                text: 'Исследование уровня антигена аденогенных раков CA 72-4 в крови',
                price: 1800,
                deadlinePayment: '10.01.2023',
                isPaid: true,
            },
            {
                id: 1028,
                text: 'Прием (осмотр, консультация) врача-онколога первичный',
                price: 1900,
                deadlinePayment: '22.01.2023',
                isPaid: true,
            },
            {
                id: 1029,
                text: 'Биопсия непальпируемых новообразований молочной железы аспирационная вакуумная под контролем ультразвукового исследования',
                price: 400,
                deadlinePayment: '28.03.2023',
                isPaid: true,
            },
        ]
    },
    reducers: {

    }
})

export default userServicesSlice.reducer;