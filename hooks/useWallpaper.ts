export interface Wallpaper{
    url:string,
    name:string
    category?:string
}

export function useWallpaper(): Wallpaper[] {
  return [
    {
      url:"https://c4.wallpaperflare.com/wallpaper/888/401/127/ai-art-gamer-computer-pc-gaming-hd-wallpaper-preview.jpg",
      name:"Coding",
      category:"liked"
    },
    {
      url: "https://img.freepik.com/free-photo/digital-art-moon-tree-wallpaper_23-2150918811.jpg",
      name: "color tree",
      category:"tree"
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8SdsR9K6qNNxkExuSRl5RWtaas2EIeFLl8A&s",
      name: "color car",
      category:"liked"
    },
    {
      url:"https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg",
      name:"Nature",
      category:"nature"
    }
  ];
}
