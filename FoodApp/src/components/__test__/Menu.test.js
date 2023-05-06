import "@testing-library/jest-dom"
import { render , waitFor , fireEvent} from "@testing-library/react";
import Body from "../Body.js";
import RestaurantMenu from "../RestaurantMenu.js";
import Header from "../Header.js";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Shimmer should load on a homepage", () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  //   console.log(body);
  const shimmer = body.getByTestId("shimmer")
//   expect(shimmer.children.length).toBeInTheDocument();
  expect(shimmer.children.length).toBe(10);
//   console.log(shimmer);
  });

// test("Add items to cart", async() => {
//     const RestaurantMenu = render(
//       <StaticRouter>
//         <Provider store={store}>
//           <RestaurantMenu/>
//         </Provider>
//       </StaticRouter>
//     );

//     console.log(RestaurantMenu)
  
// //     await waitFor(()=>expect(RestaurantMenu.getByTestId("menu")))
// //   const addBtn = RestaurantMenu.getByTestId("addbtn")
  
// //   fireEvent.click(addBtn[0]);
// //   const cart = body.getByTestId("cart")
// //     expect(cart.innerHTML).toBe("Cart - 1 items");
//     //   expect(resList.children.length).toBe(15);
//   });

test("Add items to cart", async() => {
    const resMenu = render(
      <StaticRouter>
        <Provider store={store}>
            <Header/>
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    );
  
    await waitFor(()=>expect(resMenu.getByTestId("menu")))
  
    const addBtn = resMenu.getAllByTestId("addbtn")
  
    fireEvent.click(addBtn[0]);
    // fireEvent.click(addBtn[1]);
    const cart = resMenu.getByTestId("cart")
    expect(cart.innerHTML).toBe("Cart-1 items");
  });
  