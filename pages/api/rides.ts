// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import next from "next";

type Data = {
  Ride: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    Ride: [
      {
        id: 1,
        origin_station_code: 23,
        station_path: [23, 42, 45, 48, 56, 60, 77, 81, 93],
        destination_station_code: 93,
        date: 1644924365,
        map_url: "url",
        state: "Maharashtra",
        city: "Panvel",
      },
      {
        id: 2,
        origin_station_code: 20,
        station_path: [20, 39, 40, 42, 54, 63, 72, 88, 98],
        destination_station_code: 98,
        date: 1644924365,
        map_url: "url",
        state: "Maharashtra",
        city: "Panvel",
      },
      {
        id: 3,
        origin_station_code: 13,
        station_path: [13, 25, 41, 48, 59, 64, 75, 81, 91],
        destination_station_code: 91,
        date: 1644924365,
        map_url: "url",
        state: "Maharashtra",
        city: "Panvel",
      },
    ],
  });
}
