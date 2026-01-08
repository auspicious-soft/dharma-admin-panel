import FlashCardsItem from "@/components/flashCards/FlashCardsItem";
import React, { useState } from "react";
import { flashCardsData } from "@/components/flashCards/flashCards.data";
import CourseSelect from "@/components/reusableComponents/CourseSelect";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TableSearch from "@/components/reusableComponents/TableSearch";
import { useNavigate } from "react-router-dom";


const FlashCards = () => {
const navigate = useNavigate();
  const [cards, setCards] = useState(flashCardsData);

  const handleDelete = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between flex-col lg:flex-row gap-4 items-center">
        <h2 className="justify-start text-2xl font-bold w-full lg:w-auto">
          Flash Cards
        </h2>
        <div className="flex flex-wrap flex-1 w-full gap-2 lg:gap-4 lg:justify-end">
          <CourseSelect />
          <Button variant="secondary" className="h-[44px]"
            onClick={() => navigate("/flash-cards/add-flash-cards")}
          >
            Add Flash Card
          </Button>
          <Button
            variant="outline"
            className="h-[44px] flex border-paragraph text-paragraph items-center gap-1 md:gap-2 !text-xs"
          >
            Download Sample
          </Button>
          <Button variant="secondary" className="h-[44px]">
            Upload CSV
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-3 mt-3">
        <Select>
          <SelectTrigger className="max-w-72 py-[11px]">
            <SelectValue placeholder="Select A Flash Card Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Category1">Category 1</SelectItem>
            <SelectItem value="Category2">Category 2</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-1 md:gap-3 items-center">
          <TableSearch />
          <Button variant="secondary" className="h-[44px]"
          onClick={() => navigate("/flash-cards/manage-categories")}
          >
            Manage Categories
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <FlashCardsItem
            key={card.id}
            id={card.id}
            question={card.question}
            image={card.image}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default FlashCards;
