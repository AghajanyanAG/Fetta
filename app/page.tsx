import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductGroupList } from "@/components/shared/product-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/TopBar";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container>
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Pizzas"
                items={[
                  {
                    id: 1,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 2,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 3,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 4,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 5,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 6,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductGroupList
                title="Combo"
                items={[
                  {
                    id: 1,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 2,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 3,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 4,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 5,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 6,
                    name: "Peperoni",
                    imageUrl:
                      "https://media.dodostatic.com/image/r:292x292/019396b78c4070cb84537a078767178c.jpg",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
