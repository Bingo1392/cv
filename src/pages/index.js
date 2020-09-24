import React from "react";
import {
  GlobalStyle,
  MainContainer,
} from '../styles/index';
import Card from "../components/card/Card"
import Placeholder from "../components/placeholder/Placeholder"
import { PlaceholderContainer } from "../components/placeholder/Placeholder.styles"

export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <MainContainer>
        {/*<Card>*/}
        {/*  ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ipsum luctus, eleifend lorem eget, vehicula ante. Praesent eu porta orci. Duis vitae enim tincidunt, ultricies dolor sed, viverra ex. Phasellus aliquet vel nisi ut commodo. Sed interdum gravida ante, quis mattis justo tempor at. Curabitur id est nulla. Donec metus ex, suscipit sed quam sit amet, auctor maximus nulla. Praesent suscipit, erat quis interdum laoreet, arcu lorem ultrices dolor, at suscipit lorem augue eu orci. Ut ex elit, convallis vitae nisi at, eleifend pellentesque magna. Phasellus scelerisque non est in rutrum.*/}

        {/*  Nunc tristique elementum diam, quis egestas tellus ullamcorper eu. Fusce laoreet pharetra metus et sollicitudin. Maecenas felis mauris, auctor id facilisis id, sodales condimentum libero. Cras auctor congue arcu nec fringilla. Nulla lobortis est ante, vitae fringilla justo tincidunt sit amet. Curabitur id ipsum id odio fermentum tincidunt ac vel nisl. Aliquam et felis ac enim viverra scelerisque. Mauris mattis leo et venenatis luctus. Aenean iaculis mauris odio, at dignissim justo cursus a. Mauris quis libero volutpat, dictum turpis at, egestas lectus. Nulla sapien nulla, suscipit interdum arcu pulvinar, posuere ultrices eros. Nulla lobortis mollis posuere.*/}

        {/*  Mauris placerat consequat pellentesque. Suspendisse mollis, lacus sed posuere pellentesque, risus risus imperdiet enim, sed viverra felis neque nec urna. Aliquam ac leo ut ex rhoncus pretium. Morbi gravida cursus sapien, nec bibendum nisl consectetur consectetur. Sed vitae varius orci, id dignissim elit. Praesent metus metus, congue at blandit id, porttitor eget enim. Donec ac interdum dui, eget malesuada felis.*/}

        {/*  Mauris et nunc quis est sollicitudin scelerisque. Morbi lacus leo, molestie eget efficitur eget, commodo a est. Donec in euismod risus. Nunc facilisis massa vitae sem volutpat, sed scelerisque orci ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor augue, consequat sit amet tortor ut, pretium ultricies tellus. Nunc lacinia efficitur vehicula. Integer erat tellus, euismod nec pretium sit amet, condimentum volutpat sapien.*/}

        {/*  Pellentesque sed lobortis turpis. Phasellus sed felis ut ligula sodales accumsan. In sit amet facilisis erat. Mauris sed sollicitudin nulla. Vivamus pulvinar ligula lectus, nec scelerisque tellus dignissim vitae. Sed nulla leo, vestibulum eget mi et, mattis sodales arcu. Nunc felis nulla, iaculis et lectus in, accumsan tempor lacus. Nulla augue ante, hendrerit vitae diam ac, lacinia ultrices risus. Duis bibendum justo vel erat maximus porta. Fusce euismod nunc fermentum magna rhoncus, at semper metus ultricies. Donec nec bibendum risus, laoreet maximus quam. Curabitur lobortis eros leo. Aliquam egestas nisl*/}
        {/*</Card>*/}
        <PlaceholderContainer>
          <Card>
            <Placeholder />
          </Card>
        </PlaceholderContainer>
      </MainContainer>
    </React.Fragment>
  )
}
