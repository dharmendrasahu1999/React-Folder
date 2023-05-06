import "@testing-library/jest-dom"
import { render , waitFor , fireEvent} from "@testing-library/react";
import Body from "../Body.js";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
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

test("Restaurants should load on a homepage", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(()=>expect(body.getByTestId("search-button")))
const resList = body.getByTestId("res-list")
    expect(resList.children.length).toBe(15);
});

test("Search for string(food) on a homepage", async() => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
  
    await waitFor(()=>expect(body.getByTestId("search-button")))
  const input = body.getByTestId("search-input")
  fireEvent.change(input,{target:{
    value:"rolls",
  }})

  const searchBtn= body.getByTestId("search-button");
  fireEvent.click(searchBtn);
  const resList = body.getByTestId("res-list")
    expect(resList.children.length).toBe(1);
    //   expect(resList.children.length).toBe(15);
  });
