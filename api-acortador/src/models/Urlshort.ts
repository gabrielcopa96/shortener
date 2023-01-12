import { Schema, model } from "mongoose";
import { UrlShortType } from "../interfaces/shortUrl.interface";

const urlshortSchema = new Schema<UrlShortType>({
    codeShort: {
        type: String,
        required: true,
        minlength: 5,
    },
    urlOriginal: {
        type: String,
        required: true
    }
})

const UrlShortModel = model("urlshort", urlshortSchema);
export default UrlShortModel;