export default function(res, data, status = 201) {
  res.json({
    status,
    payload: data,
  });
}
