import Hero from "./Hero";
import { render, screen } from "@testing-library/react";
import strings from "../../strings/hero.json";


test('renders hero', () => {
    render(<Hero />);
    const hero = screen.getByTestId("hero");
    expect(hero).toBeInTheDocument()
  });

test('renders strings correctly', () => {
    render(<Hero />);
    
    const heroDate = screen.getByTestId("hero-date");
    expect(heroDate).toHaveTextContent(strings.date)

    const heroGroom = screen.getByTestId("hero-groom");
    expect(heroGroom).toHaveTextContent(strings.groom)

    const heroBride = screen.getByTestId("hero-bride");
    expect(heroBride).toHaveTextContent(strings.bride)

    const heroQuote = screen.getByTestId("hero-quote");
    expect(heroQuote).toHaveTextContent(strings.quote)
  });