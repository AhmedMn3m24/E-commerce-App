import { CategoryType } from "../interfaces/Category";

export async function getAllCategories(): Promise<null | CategoryType[]> {
    try {

        const response = await fetch('https://ecommerce.routemisr.com/api/v1/categories')
        const finalRes = await response.json()
        console.log("finalRes", finalRes);


        return finalRes.data
    } catch (error) {
        console.log("error", error);
        return null
    }
}