import {csv} from d3;

const csvUrl = 'https://gist.githubusercontent.com/DERRICKSONNDAMBUKI/3bb093ef910eda3218c313ee9cc5d72d/raw/sensei_auto_mpg_dataset'

export const GetData = async()=>{
    const data = await  csv(csvUrl)

    // have a look at the attributes available in the console
    console.log(data[0]);

    return data
}