import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import gsap from "gsap";

import { MainWrapper, Book, Button } from "./Main.css";
import BookModal from "../modal";
import Loading from "../loading";

const Main = ({ items, loading }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(items[0]);
  const [saleLink, setSaleLink] = useState("");

  const booksWrapper = useRef(null);

  useEffect(() => {
    const elements = booksWrapper.current.children;

    gsap.set(elements, { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.fromTo(
      elements,
      { y: "+=100" },
      { duration: 1, y: "-=100", autoAlpha: "1" }
    );
  }, [loading]);

  const openModal = (e) => {
    setIsOpen(true);
    const CName = e.target.className;
    const idOfItem = CName.substr(CName.length - 2, 2) - 1;
    setInfo(items[idOfItem].volumeInfo);

    if (items[idOfItem].saleInfo.saleability === "FOR_SALE") {
      setSaleLink(items[idOfItem].saleInfo.buyLink);
    } else {
      setSaleLink("NOT_FOR_SALE");
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const Books = items;
  const Bookcase = Books.map((item, i) => (
    <Book key={item.id}>
      <img
        className={item.id}
        src={
          item.volumeInfo.imageLinks === undefined
            ? "https://www.gollancz.co.uk/wp-content/uploads/2018/07/missingbook.png"
            : item.volumeInfo.imageLinks.smallThumbnail
        }
        alt={item.volumeInfo.title}
      />
      <Button onClick={(e) => openModal(e)} className={i + 1}>
        Details
      </Button>
      <div className="desc">{item.volumeInfo.title}</div>
    </Book>
  ));

  return (
    <main>
      <BookModal
        opened={modalIsOpen}
        closeModal={closeModal}
        info={info}
        saleLink={saleLink}
      />
      <MainWrapper ref={booksWrapper}>
        {loading ? <Loading /> : Bookcase}
      </MainWrapper>
    </main>
  );
};

const mapStateToProps = (state) => ({
  items: state.Books.items,
  error: state.Books.error,
  loading: state.Books.loading,
});

export default connect(mapStateToProps)(Main);
