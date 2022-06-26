// KOMPOENEN INI UNTUK MENAMPILKAN TABEL
// parameternya adalah {data}, dimana data berisi array building contohnya
// [{
//     id: 1,
//     building_name: "Gedung Jokowi Bergambar",
//     total_room: 15,
//     room_space: 20,
//     address: "Jl. Jokowi",
//     image_url:
//       "https://office-booking-ct19-bucket.s3.ap-southeast-3.amazonaws.com/building/image_2022-06-15T02%3A21%3A28.772871_capture5.png",
//     total_view: 120,
//     complex: {
//       id: 1,
//       city: "Vrindavan Barat",
//     },
//     nearby_facilities: [],
//   }],

const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Nama Bangunan</th>
          <th>Alamat</th>
          <th>ImageLink</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.building_name}</td>
            <td>{item.address}</td>
            <td>{item.image_url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
