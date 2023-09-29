module Main exposing (..)
import Browser
import Html exposing (Html, button, div, text, header, footer, h1)
import Html.Events exposing (onClick)



-- MAIN


main =
  Browser.sandbox { init = init, update = update, view = view }



-- MODEL

type alias Model = Int

init : Model
init =
  0


-- UPDATE

type Msg = Increment | Decrement | Reset | Multiply

update : Msg -> Model -> Model
update msg model =
  case msg of
    Increment ->
      model + 1

    Decrement ->
      model - 1

    Reset ->
      model - model
    
    Multiply ->
      model * 2


-- VIEW

view : Model -> Html Msg
view model =
  div []
    [ 
      header [] [ 
        h1 [][ text "Hello World!" ]
      ]
      
    , button [ onClick Decrement ] [ text "-" ]
    , div [] [ text (String.fromInt model) ]
    , button [ onClick Increment ] [ text "+" ]
    , div [] []
    , button [ onClick Reset ] [ text "Reset" ]
    , button [ onClick Multiply ] [ text "*" ]

    , footer [] [ text "Goodbye World!" ]
    ]