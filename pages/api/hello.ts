
export default function handler(req,res){
	 
	 if(req.method === 'POST'){

		const data = [
			{id:1, name:"Md. Rajon"},
			{id:2, name:"Md. Sumon"},
			{id:3, name:"sdafasdf"},
			{id:4, name:"sdafasdf"},
			{id:5, name:"sdafasdf"},
			{id:6, name:"sdafasdf"},
			{id:7, name:"sdafasdf"},
			{id:8, name:"sdafasdf"},
			{id:9, name:"sdafasdf"},
			{id:10, name:"sdafasdf"}
		]

	  res.status(200).json({ details:data })	
	}

  res.status(200).json({ details:"its not post method" })	

}
