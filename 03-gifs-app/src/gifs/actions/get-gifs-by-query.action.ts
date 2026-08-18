// Uso de Axios para recuperar GIFs

import axios from "axios";
import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";


export const getGifsByQuery = async(query: string): Promise<Gif[]> => {

	const response = await giphyApi<GiphyResponse>('/search', {
		params: {
			q: query,
			limit: 10,
		},
	});
	

	return response.data.data.map((data) => ({
		id: data.id,
		title: data.title,
		url: data.images.original.url,
		width: Number(data.images.original.width),
		height: Number(data.images.original.height)
		
	}));
   
	//fetch(`https://api.giphy.com/v1/gifs/random?api_key=q0xpS5DakcpBeUicX4Mp0Jg7GL9uBBay&query=${query}&tag=&rating=g`);
};
