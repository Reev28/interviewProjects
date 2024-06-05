import Colour from "@/components/Colour";
import ImageSlider from "@/components/ImageSlider";
import Rating from "@/components/Rating";
import Selector from "@/components/Selector";
import Image from "next/image";
import LoadMore from "@/components/LoadMore"
import TreeNavigation from "@/components/TreeNavigation";
import Theme from "@/components/Theme";
import { ScrollTracker } from "@/components/ScrollTracker";

let data = [
  {
    id: 1,
    question: 'Question 1',
    answer: 'Answer 1',
    selected: false

  },
  {
    id: 2,
    question: 'Question 2',
    answer: 'Answer 2',
    selected: false
  },
  {
    id: 3,
    question: 'Question 3',
    answer: 'Answer 3',
    selected: false
  },

]

const initialArr = [{ label: 'Home' }, { label: 'Profile', children: [{ label: 'image' }, { label: 'bio' }] }, { label: 'Settings', children: [{ label: 'ab', children: [{ label: 'image' }] }, { label: 'cd' }] }];



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Selector data={data} />
      <Colour />
      <Rating totalStars={10} />
      <ImageSlider />
      <LoadMore />
      <TreeNavigation menu={initialArr} /> */}
      {/* <Theme /> */}
      <ScrollTracker url={'https://dummyjson.com/products?limit=100'} />
    </main>
  );
}


