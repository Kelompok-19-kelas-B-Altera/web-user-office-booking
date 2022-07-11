// this is dummy data from API building

export const Buildings = [
  {
    id: 2,
    building_name: "Visco Co-Working Area",
    description: "Co-Working space description",
    total_room: 4,
    room_space: 8,
    address: "Jl. Mawar 3",
    images: [],
    total_view: 0,
    complex: {
      id: 1,
      city: "Jakarta Pusat",
    },
    nearby_facilities: [
      {
        id: 1,
        name: "Totti Shopping Centre",
        type: "Pusat Perbelanjaan",
        distance: 50,
      },
    ],
    schedules: [],
    reviews: [],
  },
  {
    id: 1,
    building_name: "Gedung  Indah",
    description: "Bangunan ini ternyata adalah bangunan",
    total_room: 15,
    room_space: 20,
    address: "Jl. Mawar 3",
    images: [
      {
        id: 1,
        image_url:
          "https://office-booking-ct19-bucket.s3.ap-southeast-3.amazonaws.com/building/image_1_2022-06-28T14%3A07%3A09.150966_coworking_office_1.jpg",
      },
      {
        id: 2,
        image_url:
          "https://office-booking-ct19-bucket.s3.ap-southeast-3.amazonaws.com/building/image_1_2022-06-28T14%3A07%3A15.686702_coworking_office_2.jpg",
      },
    ],
    total_view: 0,
    complex: {
      id: 1,
      city: "Jakarta Pusat",
    },
    nearby_facilities: [
      {
        id: 1,
        name: "Totti Shopping Centre",
        type: "Pusat Perbelanjaan",
        distance: 10,
      },
      {
        id: 2,
        name: "Terminal Pasar Malam",
        type: "Transportasi",
        distance: 25,
      },
    ],
    schedules: [
      {
        id: 1,
        from_date: "12-06-2022 14:13:13",
        until_date: "20-06-2022 14:13:13",
        building: null,
        ready: true,
        booked: false,
      },
      {
        id: 2,
        from_date: "21-06-2022 14:13:13",
        until_date: "29-06-2022 14:13:13",
        building: null,
        ready: true,
        booked: false,
      },
    ],
    reviews: [
      {
        review: "Tempatnya sangat nyaman dan bisa membuat saya fokus",
        rating: 5,
        user: {
          id: 1,
          fullname: "Wahyu Wijanarko",
          email: null,
          images: null,
        },
      },
      {
        review: "Tempatnya sangat nyaman dan bisa membuat saya fokus",
        rating: 3,
        user: {
          id: 3,
          fullname: "user",
          email: null,
          images: null,
        },
      },
      {
        review: "Tempatnya sangat nyaman dan bisa membuat saya fokus",
        rating: 4,
        user: {
          id: 4,
          fullname: "user",
          email: null,
          images: null,
        },
      },
      {
        review: "Tempatnya sangat nyaman dan bisa membuat saya fokus",
        rating: 3,
        user: {
          id: 5,
          fullname: "bahrul",
          email: null,
          images: null,
        },
      },
    ],
  },
  {
    id: 3,
    building_name: "Office Officity",
    description:
      "Office ini berfungsi untuk menyediakan office yang officenya bersedia disewa melalui office officity. ",
    total_room: 1,
    room_space: 8,
    address: "Jl. jalan ke pasar minggu",
    images: [],
    total_view: 0,
    complex: {
      id: 2,
      city: "Jakarta Barat",
    },
    nearby_facilities: [],
    schedules: [],
    reviews: [],
  },
  {
    id: 4,
    building_name: "Bukan Office Officity",
    description:
      "Office ini gak berfungsi untuk menyediakan office yang officenya bersedia disewa melalui office officity. ",
    total_room: 1,
    room_space: 8,
    address: "Jl. jalan ke pasar senen",
    images: [],
    total_view: 0,
    complex: {
      id: 2,
      city: "Jakarta Barat",
    },
    nearby_facilities: [],
    schedules: [
      {
        id: 1,
        from_date: "12-07-2022 14:13:13",
        until_date: "22-07-2022 14:13:13",
        building: null,
        ready: true,
        booked: false,
      },
      {
        id: 2,
        from_date: "25-07-2022 14:13:13",
        until_date: "29-07-2022 14:13:13",
        building: null,
        ready: true,
        booked: false,
      },
    ],
    reviews: [],
  },
  {
    id: 5,
    building_name: "Anak Fe Minta Banyakin Datanya",
    description:
      "Jadi ceritanya lagi pengen nyoba logicnya. Nahhh nyoba logicnya itu butuh data yang lumayan. Sedangkan dari kemarin masih pake data dummy (ini juga sih). jadi semoga aja ini data ngebantu",
    total_room: 5,
    room_space: 5,
    address: "Jl. Citayem",
    images: [],
    total_view: 0,
    complex: {
      id: 3,
      city: "Jakarta Selatan",
    },
    nearby_facilities: [],
    schedules: [
      {
        id: 1,
        from_date: "02-07-2022 14:13:13",
        until_date: "30-07-2022 14:13:13",
        building: null,
        ready: true,
        booked: false,
      },
      {
        id: 2,
        from_date: "01-06-2022 14:13:13",
        until_date: "29-06-2022 14:13:13",
        building: null,
        ready: true,
        booked: false,
      },
    ],
    reviews: [],
  },
  {
    id: 6,
    building_name: "Anak Fe Minta Tambah Lagi Nihh",
    description:
      "Jadi ceritanya lagi pengen nyoba logicnya. Nahhh nyoba logicnya itu butuh data yang lumayan. Sedangkan dari kemarin masih pake data dummy (ini juga sih). jadi semoga aja ini data ngebantu",
    total_room: 5,
    room_space: 5,
    address: "Jl. Tol",
    images: [],
    total_view: 0,
    complex: {
      id: 3,
      city: "Jakarta Selatan",
    },
    nearby_facilities: [],
    schedules: [],
    reviews: [],
  },
  {
    id: 7,
    building_name: "Anak Fe Minta, Hmmmmmm",
    description:
      "Jadi ceritanya lagi pengen nyoba logicnya. Nahhh nyoba logicnya itu butuh data yang lumayan. Sedangkan dari kemarin masih pake data dummy (ini juga sih). jadi semoga aja ini data ngebantu",
    total_room: 5,
    room_space: 5,
    address: "Jl. Setapak",
    images: [],
    total_view: 0,
    complex: {
      id: 3,
      city: "Jakarta Selatan",
    },
    nearby_facilities: [],
    schedules: [],
    reviews: [],
  },
  {
    id: 8,
    building_name: "Bismillah MVP",
    description:
      "Jadi ceritanya lagi pengen nyoba logicnya. Nahhh nyoba logicnya itu butuh data yang lumayan. Sedangkan dari kemarin masih pake data dummy (ini juga sih). jadi semoga aja ini data ngebantu",
    total_room: 5,
    room_space: 5,
    address: "Jl. Menuju Kelulusan",
    images: [],
    total_view: 0,
    complex: {
      id: 4,
      city: "Jakarta Utara",
    },
    nearby_facilities: [],
    schedules: [],
    reviews: [],
  },
  {
    id: 9,
    building_name: "Semangat Anak FE",
    description:
      "Jadi ceritanya lagi pengen nyoba logicnya. Nahhh nyoba logicnya itu butuh data yang lumayan. Sedangkan dari kemarin masih pake data dummy (ini juga sih). jadi semoga aja ini data ngebantu",
    total_room: 5,
    room_space: 5,
    address: "Jl. Yok Bisa Yok",
    images: [],
    total_view: 0,
    complex: {
      id: 4,
      city: "Jakarta Utara",
    },
    nearby_facilities: [],
    schedules: [
      {
        id: 1,
        from_date: "11-07-2022 14:13:13",
        until_date: "16-07-2022 14:13:13",
        building: null,
        ready: true,
        booked: false,
      },
      {
        id: 2,
        from_date: "1-07-2022 14:13:13",
        until_date: "10-07-2022 14:13:13",
        building: null,
        ready: true,
        booked: false,
      },
    ],
    reviews: [],
  },
];
