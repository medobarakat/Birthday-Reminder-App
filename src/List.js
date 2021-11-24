import React from 'react';

const List = ({People}) => {
  return (
    <>
    {People.map((man)=>{
      const {id,name,age,image} = man;
      return <article className="person" key={id}>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
      </article>
    })};
    </>
  );
};

export default List;
