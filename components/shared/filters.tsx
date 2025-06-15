import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFilterGroups } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Collect your pizza" value="1" />
        <FilterCheckbox text="News" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Prices</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={40}
            defaultValue={0}
          />
          <Input type="number" min={5} max={60} placeholder="20" />
        </div>

        <RangeSlider min={0} max={60} step={3} value={[0, 60]} />
      </div>
      <CheckboxFilterGroups
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: "Mozzarella",
            value: "1",
          },
          {
            text: "Cheese sous",
            value: "2",
          },
          {
            text: "Pickled cucumbers",
            value: "3",
          },
          {
            text: "Garlic",
            value: "4",
          },
          {
            text: "Tomatoes",
            value: "5",
          },
          {
            text: "Red onion",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Mozzarella",
            value: "1",
          },
          {
            text: "Cheese sous",
            value: "2",
          },
          {
            text: "Pickled cucumbers",
            value: "3",
          },
          {
            text: "Garlic",
            value: "4",
          },
          {
            text: "Tomatoes",
            value: "5",
          },
          {
            text: "Red onion",
            value: "6",
          },
          {
            text: "Mozzarella",
            value: "1",
          },
          {
            text: "Cheese sous",
            value: "2",
          },
          {
            text: "Pickled cucumbers",
            value: "3",
          },
          {
            text: "Garlic",
            value: "4",
          },
          {
            text: "Tomatoes",
            value: "5",
          },
          {
            text: "Red onion",
            value: "6",
          },
        ]}
      />
    </div>
  );
};
