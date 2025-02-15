// extends - обмежує тип до певного діапазону, використовувати тільки ті типи, які "розширюють"
// Pick<obj, 'key'> - витягує ключі

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};
//<T extends AllType, U extends AllType>
function compare<
  T extends Pick<AllType, "name" | "color">,
  B extends Pick<AllType, "position" | "weight">
>(top: T, bottom: B): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
