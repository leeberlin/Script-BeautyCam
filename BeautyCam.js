var objc = JSON.parse($response.body);

objc = {
  "meta": {
    "code": 0,
    "msg": "",
    "error": "",
    "request_uri": "/vip/user_info",
    "reqid": "992ed95c3a4987833e603aaa3a882e2d"
  },
  "response": {
    "status": 1,
    "agreement_status": 2,
    "agreement_platform": 1,
    "expire_date": "2099-12-31",
    "expire_time": 0,
    "period_type": 3,
    "product_type": 0,
    "permission": [],
    "type": 3,
    "ad_vip_type": 4,
    "discount_status": 0,
    "gray": 0
  }
};

$done({ body: JSON.stringify(objc) });
