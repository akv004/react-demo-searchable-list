import React, { useState } from "react";

const CONTACTS = [
  {
    id: 1,
    name: "Tom",
    phoneNumber: "0938073320",
    image: "http://accounts-cdn.9gag.com/media/avatar/14368888_100_1.jpg"
  },
  {
    id: 2,
    name: "Tim",
    phoneNumber: "0945565655",
    image:
      "http://forums.animeboston.com/download/file.php?avatar=11355_1455595397.png"
  },
  {
    id: 3,
    name: "Max",
    phoneNumber: "0975149873",
    image: "http://avatars-cdn.9gag.com/avatar/erickson8903_14899765_100.jpg"
  },
  {
    id: 4,
    name: "Mike",
    phoneNumber: "0638546385",
    image:
      "https://38.media.tumblr.com/4249a67e76729e9126ef3f70e741c323/tumblr_inline_mixcyvIPd81qz4rgp.jpg"
  }
];

const Contact = props => {
  return (
    <li>
      <img src={props.image} alt="img" />
      <span>{props.name}</span>
      <span className="phone">{props.phone}</span>
    </li>
  );
};

const ContactList = () => {
  const [contacts, setContacts] = useState(CONTACTS);

  const searchHandler = event => {
    let searcjQery = event.target.value.toLowerCase(),
      displayedContacts = CONTACTS.filter(el => {
        let searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searcjQery) !== -1;
      });
    setContacts(displayedContacts);
  };

  return (
    <div className="holder">
      <input type="text" classNAme="search" onChange={searchHandler} />
      <ul>
        {contacts.map(el => {
          return (
            <Contact
              key={el.id}
              name={el.name}
              image={el.image}
              phone={el.phoneNumber}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
