import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  RecipeContainer,
  RecipeDisplay,
  RecipeCard,
  RecipeCardName,
  RecipeCardImage,
  CardIcons,
  CardButton,
} from "./RecipeElements";
import PropTypes from "prop-types";
import { sushi } from "../../../data/data";
import { connect } from "react-redux";
import { getSushis } from "../../../redux/actions/dataActions";
import { FaRegHeart, FaRegListAlt, FaRegPlusSquare } from "react-icons/fa";
const Recipe = (props) => {
  const [sushiCard, setSushiCard] = useState("");

  useEffect(() => {
    setSushiCard(sushi);
    console.log(sushiCard);
  }, []);

  const { sushis, loading } = props.data;
  // console.log(sushis);

  const recentSushisMarkUp = loading ? (
    <p>Loading...</p>
  ) : (
    sushis.map((sushi) => (
      <>
        <h1 key={sushi.sushiId} sushi={sushi}>
          {sushi.name}
        </h1>
        <h1>{sushi.category}</h1>
        {sushi.ingredients.map((e, i) => (
          <p key={i}>{e}</p>
        ))}

        <img
          style={{ width: "200px", height: "200px" }}
          src={sushi.image}
        ></img>
      </>
    ))
  );

  // useEffect(() => {
  //   axios
  //     .get("https://us-central1-webesushi-a3bf0.cloudfunctions.net/api/sushis")
  //     .then((res) => {
  //       setSushi(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <RecipeContainer>
      <h1>Recipe</h1>
      <RecipeDisplay>
        {sushi.map((e) => (
          <RecipeCard key={e.id}>
            <RecipeCardName>{e.name}</RecipeCardName>
            <RecipeCardImage src={e.images} />
            <CardIcons>
              <CardButton>
                <FaRegHeart />
              </CardButton>
              <CardButton>
                <FaRegListAlt />
              </CardButton>
              <CardButton>
                <FaRegPlusSquare />
              </CardButton>
            </CardIcons>
          </RecipeCard>
        ))}
      </RecipeDisplay>
    </RecipeContainer>
  );
};

Recipe.propTypes = {
  getSushis: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ data: state.data });

export default connect(mapStateToProps, { getSushis })(Recipe);