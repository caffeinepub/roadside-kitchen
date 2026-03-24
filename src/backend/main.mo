import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";

actor {
  type RestaurantInfo = {
    name : Text;
    tagline : Text;
    address : Text;
  };

  type MenuItem = {
    displayName : Text;
    displayEmoji : Text;
  };

  type Review = {
    reviewerName : Text;
    reviewText : Text;
  };

  let restaurantInfo = Map.singleton<Text, { #restaurantInfo : RestaurantInfo }>("Roadside Kitchen", #restaurantInfo({
    name = "Roadside Kitchen";
    tagline = "Delicious food at affordable prices. Always fresh, always tasty.";
    address = "123 Main St, Anytown, USA";
  }));

  let menuItems = Map.singleton<Text, { #menuItem : MenuItem }>("burgers", #menuItem({ displayName = "Burgers"; displayEmoji = "🍔" }));

  let reviews = Map.singleton<Text, { #review : Review }>("johndoe", #review({ reviewerName = "johndoe"; reviewText = "Best burgers in town!" }));

  public query ({ caller }) func getRestaurantInfo() : async RestaurantInfo {
    switch (restaurantInfo.get("Roadside Kitchen")) {
      case (null) { { name = ""; tagline = ""; address = "" } };
      case (?result) {
        switch (result) {
          case (#restaurantInfo(info)) { info };
          case (_) { { name = ""; tagline = ""; address = "" } };
        };
      };
    };
  };

  public query ({ caller }) func getMenuItems() : async [MenuItem] {
    menuItems.values().toArray().map(
      func(item) {
        switch (item) {
          case (#menuItem(menu)) { menu };
          case (_) { { displayName = ""; displayEmoji = "" } };
        };
      }
    );
  };

  public query ({ caller }) func getReviews() : async [Review] {
    reviews.values().toArray().map(
      func(review) {
        switch (review) {
          case (#review(rev)) { rev };
          case (_) { { reviewerName = ""; reviewText = "" } };
        };
      }
    );
  };
};
