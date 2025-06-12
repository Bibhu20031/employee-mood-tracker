import { NextApiRequest,NextApiResponse } from "next";
import { moods,moodEntries,Mood } from "./utils/moods";

export default function handlers(req:NextApiRequest, res:NextApiResponse){
    if(req.method=== 'POST'){
        const {mood,comment} = req.body;
        if(!Object.values(Mood).includes(mood)){
            return res.status(400).json({error: "Invalid Mood"});
        }
        const newEntry:moodEntries={
            mood,
            comment,
            createdAt:new Date(),
        };
        moods.push(newEntry);
        return res.status(201).json({message:"Mood Saved"});
    }
    if(req.method === 'GET'){
        return res.status(200).json(moods);
    }

    return res.status(405).json({error:"Method not allowed"});
}