import Array "mo:core/Array";
import List "mo:core/List";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  module Destination {
    type BestSeason = {
      startMonth : Text;
      endMonth : Text;
    };

    public type Destination = {
      name : Text;
      region : Text;
      description : Text;
      bestSeason : BestSeason;
    };

    public func compare(d1 : Destination, d2 : Destination) : Order.Order {
      Text.compare(d1.name, d2.name);
    };
  };

  module TourPackage {
    public type Category = {
      #adventure;
      #cultural;
      #beach;
      #spiritual;
      #wildlife;
    };

    public type TourPackage = {
      name : Text;
      destination : Text;
      durationDays : Nat;
      priceINR : Nat;
      highlights : [Text];
      category : Category;
    };

    public func compare(p1 : TourPackage, p2 : TourPackage) : Order.Order {
      Text.compare(p1.name, p2.name);
    };
  };

  module Inquiry {
    public type Inquiry = {
      id : Nat;
      name : Text;
      email : Text;
      phone : Text;
      destinationOfInterest : Text;
      travelDates : Text;
      numberOfTravelers : Nat;
      message : Text;
    };

    public func compare(i1 : Inquiry, i2 : Inquiry) : Order.Order {
      Nat.compare(i1.id, i2.id);
    };
  };

  module Testimonial {
    public type Testimonial = {
      name : Text;
      location : Text;
      rating : Nat; // 1 to 5
      reviewText : Text;
      tourPackageName : Text;
    };

    public func compare(t1 : Testimonial, t2 : Testimonial) : Order.Order {
      Text.compare(t1.name, t2.name);
    };
  };

  type Destination = Destination.Destination;
  type TourPackage = TourPackage.TourPackage;
  type Inquiry = Inquiry.Inquiry;
  type Testimonial = Testimonial.Testimonial;

  var nextInquiryId = 1;

  let destinations = List.fromArray<Destination>([
    {
      name = "Kerala";
      region = "South India";
      description = "Known as 'God's Own Country' for its backwaters, beaches, and natural beauty.";
      bestSeason = { startMonth = "September"; endMonth = "March" };
    },
    {
      name = "Rajasthan";
      region = "Northwest India";
      description = "Famous for its palaces, forts, and deserts. Rich cultural heritage.";
      bestSeason = { startMonth = "October"; endMonth = "March" };
    },
    {
      name = "Himachal Pradesh";
      region = "North India";
      description = "Picturesque hill stations and adventure sports in the Himalayas.";
      bestSeason = { startMonth = "March"; endMonth = "June" };
    },
    {
      name = "Goa";
      region = "West Coast";
      description = "Beautiful beaches, vibrant nightlife, and Portuguese heritage.";
      bestSeason = { startMonth = "November"; endMonth = "February" };
    },
    {
      name = "Uttarakhand";
      region = "North India";
      description = "Home to spiritual sites, trekking trails, and the Himalayas.";
      bestSeason = { startMonth = "April"; endMonth = "June" };
    },
    {
      name = "The Andaman Islands";
      region = "Bay of Bengal";
      description = "Pristine beaches, coral reefs, and water sports paradise.";
      bestSeason = { startMonth = "October"; endMonth = "May" };
    },
  ]);

  let tourPackages = List.fromArray<TourPackage>([
    {
      name = "Kerala Backwaters Tour";
      destination = "Kerala";
      durationDays = 7;
      priceINR = 35000;
      highlights = ["Houseboat stay", "Munnar tea gardens", "Alleppey"];
      category = #cultural;
    },
    {
      name = "Golden Rajasthan";
      destination = "Rajasthan";
      durationDays = 10;
      priceINR = 45000;
      highlights = ["Jaipur", "Udaipur", "Jaisalmer desert"];
      category = #cultural;
    },
    {
      name = "Himalayan Adventure";
      destination = "Himachal Pradesh";
      durationDays = 8;
      priceINR = 37000;
      highlights = ["Manali", "Trekking", "River rafting"];
      category = #adventure;
    },
    {
      name = "Goa Beach Getaway";
      destination = "Goa";
      durationDays = 5;
      priceINR = 32000;
      highlights = ["Goa beaches", "Water sports", "Nightlife"];
      category = #beach;
    },
    {
      name = "Spiritual Uttarakhand";
      destination = "Uttarakhand";
      durationDays = 6;
      priceINR = 34000;
      highlights = ["Haridwar", "Rishikesh", "Pilgrimage"];
      category = #spiritual;
    },
    {
      name = "Andaman Islands Explorer";
      destination = "The Andaman Islands";
      durationDays = 8;
      priceINR = 55000;
      highlights = ["Beach resorts", "Snorkeling", "Water sports"];
      category = #beach;
    },
  ]);

  let inquiries = Map.empty<Nat, Inquiry>();
  let testimonials = Map.empty<Text, Testimonial>();

  public query ({ caller }) func getDestinations() : async [Destination] {
    destinations.toArray().sort();
  };

  public query ({ caller }) func getTourPackages() : async [TourPackage] {
    tourPackages.toArray().sort();
  };

  public query ({ caller }) func getInquiries() : async [Inquiry] {
    let inquiriesIter = inquiries.values();
    let inquiriesArray = inquiriesIter.toArray();
    inquiriesArray.sort();
  };

  public query ({ caller }) func getTestimonials() : async [Testimonial] {
    testimonials.values().toArray().sort();
  };

  public shared ({ caller }) func addInquiry(inquiry : Inquiry) : async Nat {
    let inquiryWithId = {
      inquiry with
      id = nextInquiryId;
    };
    inquiries.add(nextInquiryId, inquiryWithId);
    nextInquiryId += 1;
    inquiryWithId.id;
  };

  public shared ({ caller }) func addTestimonial(testimonial : Testimonial) : async () {
    if (testimonials.containsKey(testimonial.name)) {
      Runtime.trap("Testimonial with this name already exists");
    };

    testimonials.add(testimonial.name, testimonial);
  };
};
