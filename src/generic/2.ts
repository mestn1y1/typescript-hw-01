type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<
  T extends Pick<AllType, keyof AllType>,
  U extends Pick<AllType, keyof AllType>
>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topic = { name: "First", color: "Green", position: 10, weight: 14 };
const bottoms = { name: "Second", color: "Red", position: 12, weight: 21 };

const result = compare(topic, bottoms);
console.log(result);
