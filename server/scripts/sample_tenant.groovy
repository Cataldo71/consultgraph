///
// Add the sample tenant and owner/consultant
///
g.V().drop().iterate()
tenant = graph.addVertex(label,'TENANT','tenantId',1234,'company','Sample Tenant', 'created',System.currentTimeMillis())
owner = graph.addVertex(label,'CONSULTANT', 'fname','Tiffany','lname','Cataldo','created',System.currentTimeMillis())
tenant.addEdge('E_OWNER',owner)
tenant.addEdge('E_CONSULTS',owner)

///
// Add the brand for the sample consultant - sooo posh!
//
poshbrand = graph.addVertex(label,'BRAND', 'name','Posh','created',System.currentTimeMillis())
owner.addEdge('E_SELLS',poshbrand)

//
// Add some products
//
p1 = graph.addVertex(label,'PRODUCT','created',System.currentTimeMillis(),'productName','Cackle Spackle','description','The stuff for your face','productId','PS4001','link','https://www.perfectlyposh.com/p/cackle-spackle-detoxifying-face-mask')
poshbrand.addEdge('E_PRODUCT', p1)

p2 = graph.addVertex(label,'PRODUCT','created',System.currentTimeMillis(),'productName','LIL SNARKY','description','The stuff for your face','productId','PS4001','link','https://www.perfectlyposh.com/p/cackle-spackle-detoxifying-face-mask')
poshbrand.addEdge('E_PRODUCT', p2)

p3 = graph.addVertex(label,'PRODUCT','created',System.currentTimeMillis(),'productName','HOT MESS','description','The stuff for your face','productId','PS4002','link','https://www.perfectlyposh.com/p/cackle-spackle-detoxifying-face-mask')
poshbrand.addEdge('E_PRODUCT', p3)

p4 = graph.addVertex(label,'PRODUCT','created',System.currentTimeMillis(),'productName','HELLO SWEETIE ','description','The stuff for your face','productId','PS4003','link','https://www.perfectlyposh.com/p/cackle-spackle-detoxifying-face-mask')
poshbrand.addEdge('E_PRODUCT', p4)

p5 = graph.addVertex(label,'PRODUCT','created',System.currentTimeMillis(),'productName','TWO TO TANGO','description','The stuff for your face','productId','PS4005','link','https://www.perfectlyposh.com/p/cackle-spackle-detoxifying-face-mask')
poshbrand.addEdge('E_PRODUCT', p5)

//
// Need customers and leads
//
c = graph.addVertex(label,'CONTACT','created',System.currentTimeMillis(), 'fname','Pat', 'lname', 'Cataldo', 'address', '2487 Woodridge Ct','zip', '48380', 'state', 'MI', 'city','Milford','geolocation',Geo.point(1,2),'phone',2482522457,'email','cataldo71@gmail.com','twitter','','facebook','','pintrest','')
owner.addEdge('E_CUSTOMER', c)
c.addEdge('E_PURCHASED', p1)
c.addEdge('E_PURCHASED', p4)

c = graph.addVertex(label,'CONTACT','created',System.currentTimeMillis(), 'fname','Carolyn', 'lname', 'Hartleip', 'address', '2487 something Ct','zip', '48380', 'state', 'MI', 'city','Milford','geolocation',Geo.point(1,2),'phone',2481234567,'email','chartleip@gmail.com','twitter','','facebook','','pintrest','')
owner.addEdge('E_CUSTOMER', c)
c.addEdge('E_PURCHASED', p1)
c.addEdge('E_PURCHASED', p2)

c = graph.addVertex(label,'CONTACT','created',System.currentTimeMillis(), 'fname','Allyson', 'lname', 'Rsomething', 'address', '135 something Ct','zip', '48380', 'state', 'MI', 'city','Milford','geolocation',Geo.point(1,2),'phone',2481234567,'email','allyson@gmail.com','twitter','','facebook','','pintrest','')
owner.addEdge('E_CUSTOMER', c)
c.addEdge('E_PURCHASED', p3)
c.addEdge('E_INTERESTED', p2)

c = graph.addVertex(label,'CONTACT','created',System.currentTimeMillis(), 'fname','Stephanie', 'lname', 'Stephanie', 'address', '135 something Ct','zip', '48380', 'state', 'MI', 'city','Milford','geolocation',Geo.point(1,2),'phone',2481234567,'email','stephenie@gmail.com','twitter','','facebook','','pintrest','')
owner.addEdge('E_LEAD', c)
c.addEdge('E_INTERESTED', p1)

//
// one active campaign
//

//
// one finished campaign and its results
//
