const siteList = [
    '7net.omni7.jp',
    'a-onstore.jp',
    'a.sofmap.com',
    'aliexpress.com',
    'amazon.ae',
    'allegro.pl',
    'amazon.ca',
    'amazon.cn',
    'amazon.co.jp',
    'amazon.co.uk',
    'amazon.com',
    'amazon.com.au',
    'amazon.com.br',
    'amazon.com.mx',
    'amazon.de',
    'amazon.es',
    'amazon.fr',
    'amazon.in',
    'amazon.it',
    'amazon.nl',
    'amazon.sa',
    'amnibus.com',
    'animate-onlineshop.jp',
    'auctions.yahoo.co.jp',
    'americanas.com.br',
    'amazon.pl',
    'amazon.sg',
    'azerty.nl',
    'bauhaus.dk',
    'bestbuy.com',
    'bhphotovideo.com',
    'biggo.com.tw',
    'bilka.dk',
    'billig-arbejdstoj.dk',
    'bol.com',
    'books.com.tw',
    'books.rakuten.co.jp',
    'boozt.com',
    'bushiroad-store.com',
    'buy123.com.tw',
    'buyee.jp',
    'banggood.com',
    'canadacomputers.com',
    'casasbahia.com.br',
    'cdon.com',
    'coolblue.nl',
    'coop.dk',
    'dafiti.com.br',
    'castorama.pl',
    'cdon.com',
    'coolblue.nl',
    'coop.dk',
    'dengekiya.com',
    'e-onkyo.com',
    'decathlon.pl',
    'dekudeals.com',
    'ebay.at',
    'ebay.be',
    'ebay.ca',
    'ebay.ch',
    'ebay.co.uk',
    'ebay.com',
    'ebay.com.au',
    'ebay.com.cn',
    'ebay.com.my',
    'ebay.com.sg',
    'ebay.de',
    'ebay.fr',
    'ebay.it',
    'ebay.nl',
    'ebay.ph',
    'ecs.toranoana.jp',
    'elgiganten.dk',
    'en.animate-onlineshop.jp',
    'emag.ro',
    'empik.com',
    'eobuwie.com.pl',
    'eprice.com.tw',
    'es.aliexpress.com',
    'etmall.com.tw',
    'etsy.com',
    'event.rakuten.co.jp',
    'euro.com.pl',
    'feebee.com.tw',
    'findprice.com.tw',
    'flipkart.com',
    'fnac.fr',
    'foetex.dk',
    'fromjapan.co.jp',
    'gamers.co.jp',
    'gamma.nl',
    'gearbest.com',
    'harald-nyborg.dk',
    'hema.com',
    'hema.nl',
    'hm.com',
    'hmv.co.jp',
    'ikea.com',
    'ilva.dk',
    'invadeit.co.th',
    'jd.co.th',
    'jib.co.th',
    'jysk.dk',
    'jarir.com',
    'item.rakuten.co.jp',
    'jysk.dk',
    'livertineage.jp',
    'lttstore.com',
    'macys.com',
    'mandarake.co.jp',
    'invadeit.co.th',
    'jib.co.th',
    'jula.pl',
    'jysk.dk',
    'kabum.com.br',
    'komputronik.pl',
    'lazada.co.th',
    'lttstore.com',
    'macys.com',
    'magazineluiza.com.br',
    'marktplaats.nl',
    'matas.dk',
    'mediaexpert.pl',
    'mediamarkt.nl',
    'melonbooks.co.jp',
    'mercari.com',
    'mercadolivre.com.br',
    'mercadolibre.com.ar',
    'mercadolibre.com.bo',
    'mercadolibre.com.cl',
    'mercadolibre.com.co',
    'mercadolibre.com.cr',
    'mercadolibre.com.do',
    'mercadolibre.com.ec',
    'mercadolibre.com.gt',
    'mercadolibre.com.hn',
    'mercadolibre.com.mx',
    'mercadolibre.com.ni',
    'mercadolibre.com.pa',
    'mercadolibre.com.py',
    'mercadolibre.com.pe',
    'mercadolibre.com.sv',
    'mercadolibre.com.uy',
    'mercadolibre.com.ve',
    'mediamarkt.pl',
    'microcenter.com',
    'morele.net',
    'momoshop.com.tw',
    'mora.jp',
    'movic.jp',
    'nemlig.com',
    'netshoes.com.br',
    'neonet.pl',
    'newegg.com',
    'noon.com'
    'official-goods-store.jp',
    'order.mandarake.co.jp',
    'otakumode.com',
    'newegg.ca',
    'olx.ro',
    'olx.pl',
    'overstock.com',
    'p-bandai.com',
    'p-bandai.jp',
    'page.auctions.yahoo.co.jp',
    'pchome.com.tw',
    'pcone.com.tw',
    'price.com.hk',
    'pricerunner.co.uk',
    'pricerunner.dk',
    'qvc.com',
    'rakuten.co.jp',
    'rakuten.com.tw',
    'pontofrio.com.br',
    'pricerunner.co.uk',
    'pricerunner.dk',
    'qvc.com',
    'rakuten.com',
    'rakuten.ca',
    'rakuten.com.tw',
    'reserved.com',
    'rossmann.pl',
    'ruten.com.tw',
    'saxo.com',
    'saxo.dk',
    'shop.cosmed.com.tw',
    'shop.geekjack.net',
    'shop.gekirock.com',
    'shop.hololivepro.com',
    'shop.ponycan.com',
    'shopee.co.th',
    'shopee.tw',
    'shopping.google.com',
    'shopping.yahoo.co.jp',
    'silvan.dk',
    'skroutz.gr',
    'smile.amazon.ca',
    'smile.amazon.cn',
    'smile.amazon.co.jp',
    'smile.amazon.co.uk',
    'smile.amazon.co.uk',
    'smile.amazon.com',
    'smile.amazon.com.au',
    'smile.amazon.com.br',
    'smile.amazon.com.mx',
    'smile.amazon.de',
    'smile.amazon.es',
    'smile.amazon.fr',
    'smile.amazon.in',
    'smile.amazon.it',
    'smile.amazon.nl',
    'sofmap.com',
    'sonymusicshop.jp',
    'staples.ca',
    'staples.com',
    'suruga-ya.jp',
    'smyk.com',
    'staples.ca',
    'staples.com',
    'submarino.com.br',
    'swappa.com',
    'system76.com',
    'taniaksiazka.pl',
    'target.com',
    'tower.jp',
    'tw.bid.yahoo.com',
    'tw.buy.yahoo.com',
    'tw.mail.yahoo.com',
    'u-mall.com.tw',
    'vvstore.jp',
    'ultima.pl',
    'walmart.com',
    'wish.com',
    'x-kom.pl',
    'xl-byg.dk',
    'yodobashi.com',
    'zalando.dk',
    'zalando.nl',
    'zehrs.ca',
    'zenmarket.jp'
    'vinted.fr',
    'leboncoin.fr',
    'omakebooks.com',
    'carrefour.fr',
    'instant-gaming.com',
    'backmarket.fr',
    'steampowered.com',
    'fnac.com',
    'cdiscount.com',
    'ldlc.com',
    'zalando.dk',
    'zalando.nl',
    'zehrs.ca',
    'daraz.com.bd',
    'ryanscomputers.com',
    'startech.com.bd',
    'gadgetmonkeybd.com',
    'gadgetandgear.com',
    'gngbd.com',
    'bikroy.com',
    'materiel.net',
    'darty.com',
    'boulanger.com',
    'e.leclerc',
    'rueducommerce.fr',
    'gog.com',
    'tesco.com',
    'waitrose.com',
    'sainsburys.co.uk',
    'morrisons.com',
    'coop.co.uk',
    'zalando.pl',
    'zara.com',
    'zehrs.ca'
]
