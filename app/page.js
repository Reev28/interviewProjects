import Colour from "@/components/Colour";
import ImageSlider from "@/components/ImageSlider";
import Rating from "@/components/Rating";
import Selector from "@/components/Selector";
import Image from "next/image";
import LoadMore from "@/components/LoadMore"

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


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Selector data={data} />
      <Colour />
      <Rating totalStars={10} />
      <ImageSlider />
      <LoadMore />
    </main>
  );
}


