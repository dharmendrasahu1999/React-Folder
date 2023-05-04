import { render } from "@testing-library/react";
import Header from "../Header.js";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering header", () => {
  //Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
//   console.log(header);
  const logo = header.getAllByTestId("logo");
  console.log(logo)
  //Check if logo is loaded
});

test("Cart shoud have 0 items on rendering header", () => {
    //Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  //   console.log(header);
    const cart = header.getByTestId("cart");
    // console.log(cart)
    expect(cart.innerHTML).toBe("Cart-0 items");
  });
