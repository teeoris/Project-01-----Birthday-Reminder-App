import React from "react";

const List = ({ people, setPeople }) => {
  const removeUser = (id) => setPeople(people.filter((user) => user.id !== id));

  return (
    <div className="birthday__list">
      {people.map((person) => {
        const { name, age, img1 } = person;
        return (
          <div key={person.id} className="birthday__listWrap">
            <div className="birthday__list-info">
              <img src={img1} alt={name} />
              <div className="birthday__list-info_desc">
                <p className="birthday__list-info_desc-name">{name}</p>
                <p className="birthday__list-info_desc-age">{age}</p>
              </div>
            </div>
            <button
              className="btn birthday__list-info_btn"
              onClick={() => removeUser(person.id)}
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
