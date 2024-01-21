import axios from "axios";
import * as cheerio from "cheerio";
import { extractDescription, extractPrice, getLowestPrice } from "../utils2";

export async function scrapeAmazonProduct(url:string){
    if(!url) return;

    //brightdata proxy configuration
    const username=String(process.env.BRIGHT_DATA_USERNAME);
    const password=String(process.env.BRIGHT_DATA_PASSWORD);
    const port=2225;
    const session_id=(1000000 *Math.random())|0;

    const options={
        auth:{
            username:`${username}-session-${session_id}`,
            password
        },
        host:'brd.superproxy.io:22225',
        port,
        rejectUnauthorized:false,
    }
     try{
        const response=await axios.get(url,options);
        const $=cheerio.load(response.data);
        const title=$('span.sc-eDvSVe fhfLdV').text().trim();
        const currentPrice=extractPrice(
            $('h4.sc-eDvSVe.biMVPh')

        ); 
        const description=extractDescription($);
        
        const originalPrice=extractPrice(
            $('p.sc-eDvSVe.gQDOBc.sc-jSUZER.eSuFsQ')

        )
        /* const outOfStock=$('#availability').text().trim().toLowerCase()==='currently unavailable'; */
       /*  const image=$('.CXW8mj _3nMexc img._396cs4 _2amPTt _3qGmMb').attr('data-a-dynamic-image')||'{}';
        const imageUrls=Object.keys(JSON.parse(image));
        const currency=$('.a-price-symbol').text().trim().slice(0,1);
        const discountRate=$('span.savingsPercentage').text() .replace(/[-%]/g,'') ;
        const ratings=$('i.a-icon.a-icon-star.cm-cr-review-stars-spacing-big').text().trim().slice(0,1); */

        const data={
            url,
            /* currency:currency,
            image:imageUrls[0], */
            title,
            currentPrice:Number(currentPrice),
            originalPrice:Number(originalPrice),
            priceHistory:[],
           /*  discountRate:Number(discountRate), */
            category:'category',
            reviewsCount:100,
            /* stars:ratings,
            isOutOfStock:outOfStock, */
            description,
            lowestPrice:Number(currentPrice)||Number(originalPrice),
            highestPrice:Number(originalPrice)||Number(currentPrice),
            averagePrice:Number(currentPrice)||Number(originalPrice)
            
        }
        console.log(data);
       
     }
     catch(error:any){
         throw new Error(`failed to scrape product:${error.message}`)
     }

    
}