require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT || 9000,
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || `MIIEpQIBAAKCAQEAyDUBBY0uiDYOxOC0ElT+bq3E45/osB74bYo1OfnB4eIsXu5i
    BnJR7e4KAMGpd+3q/HGMxthOiNKCgybx40mWynG8lObjoikg4VCXKWYdxUncWx9c
    LByARhS1Csv7mObCbW1Y28biy8MlS+zqIRA7Xmin6D0kLhqpcNklr/GI7zyJgoix
    eahjr3T3COE+MC8Syem7tOZ5H/gMfLQ7M+h34OqO1h7TZqTyeSHmt8W2BJlw9AEb
    9/JDlf47TGuyxsh/8TCPTv//QIbrXo73NtpwlztlT0v0xHu3TiOJzwAO603J63Zg
    AqEdoetFTGB+bCa9ujvyUCXoZ9OKRT//sk2xLwIDAQABAoIBAQC710dDHyiGcjm/
    LJinDom97Fnru5AFFrm9hMvVvmjTd3JsCzt7ku0d0JYgCZPoSxiLjDoqIq7knqYH
    SZXvy46oGLh3+H2hGveXjxaUqBPMlDUkZbMETCVqG2mVXLeNyQyowMx7QApwZYLr
    zrgJF4KsXIMVWbBFdYx+ra43euYglsIW/CPOMWBn/kv8ok9bYjtUG7c7aCxmZMFQ
    ZFjROfy+Ag/wumJB+OCwU6CVqxH4BaN3fNDvUYpbXu5bwMONPaNsUCWdX7sBbqGx
    c6x9Y2nY0lRaAuP8Wxhlyf0rQB447VpFxgoZAsUmSCyNvMs6k3isbvFtFDMSzG60
    yih7rJ6pAoGBAOMQzhHXpNVPnIVx1rrY51jX5yMHr9nmgGch1jAp+D3QzIyzKQfR
    CIlTgNbHWmqXf0eYmrgokaXiMnAO3n5vthYnTA/a77QV/Nsvry/xk1mICUM0BDYt
    T/vYZtaBY5dqzom1IJbvJs9BbZANSYUm3hU7OJx99+V6CC637vJxUx/1AoGBAOG4
    CNMXJy3tzvnxrQZwCpOJfTjgpDkNuPHvV47ObJYKJMUT6qd5Z1vOiOgqW5EoXfJ2
    eRgS9pOyu7QlzafsRNDsWrh1vGJK+jo3RSO0eQY2prCGX3zyLVT/C/zCoADxMCm/
    Dc5PJ9znmk+VAdyM4uR5ROq29QkQz2b84NG+X8oTAoGAZj487B/T4xE0A4qdDAl7
    MrAVLdraPh3il43O6mUbmIoacQiDYzemxl9JVmzxs6l/8Hcww9fQrYdK+tZXLUuU
    DCmpwEHvSYHVF8VC9y2qEdiFgzM66kJBD8ADnncopxe65Jsgj5YkPZLSiNjS0BgO
    TDUcaqr2IuhuIstD1vtcWLkCgYEA3Y7wkotSeOHJ3UtdRElsCD/Xu6G9cQdIN6pw
    bouuyGPyjcQr+/HOA66qcgFJ2iUeemXSHVBX2siBOKY2xRLExbKKpi9jF7RzA/vG
    kPKQLQot+m4bgqCQ4LJsyNEdj28vkHqpiY3nGg34SQ+BQUTFXfCvNhkaUqi+fF/S
    Ke9NRSMCgYEAr3Ca7nGllMkuefVLaU+RkCFUPwTUvvHn2384eRbNm/Ao0ruMZ553
    ttPThoOp68bGY7K8YVEdXVcuVNScJM8PmN0RNNI30w/lOZTrDet0D8s6FTKx2FyJ
    0wuNGffb+0bYuoGdEtdZvzQau9YgoCLfEB6AKHqq6dMkApJMWCIXK38=`.trim(),
    expiry: process.env.JWT_EXPIRY,
    issuer: process.env.JWT_ISSUER || 'express-server',
  },
  db: {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || '27017',
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
  },
};
