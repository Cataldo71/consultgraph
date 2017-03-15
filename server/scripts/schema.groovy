// Consultant Graph SCHEMA

// To run in Studio, copy and paste all lines to a cell and run.

// To run in Gremlin console, use the next two lines:
// script = new File('/server/scripts/consultgraph-schema.groovy').text; []
// :> @script
schema.clear()
///////////////////////////////////////////////////////////////
// Property Keys
///////////////////////////////////////////////////////////////

// Tenant
schema.propertyKey('company').Text().ifNotExists().create()
schema.propertyKey('logo').Text().ifNotExists().create()
schema.propertyKey('tenantId').Int().ifNotExists().create()

// Contact & Consultant
schema.propertyKey('fname').Text().ifNotExists().create()
schema.propertyKey('lname').Text().ifNotExists().create()
schema.propertyKey('address').Text().ifNotExists().create()
schema.propertyKey('zip').Int().ifNotExists().create()
schema.propertyKey('state').Text().ifNotExists().create()
schema.propertyKey('city').Text().ifNotExists().create()
schema.propertyKey('geolocation').Point().ifNotExists().create()
schema.propertyKey('phone').Int().ifNotExists().create()
schema.propertyKey('email').Text().ifNotExists().create()
schema.propertyKey('twitter').Text().ifNotExists().create()
schema.propertyKey('facebook').Text().ifNotExists().create()
schema.propertyKey('pintrest').Text().ifNotExists().create()



// Product & Brand
schema.propertyKey('name').Text().create()
schema.propertyKey('description').Text().ifNotExists().create()
schema.propertyKey('productId').Text().ifNotExists().create()
schema.propertyKey('productName').Text().ifNotExists().create()
schema.propertyKey('link').Text().ifNotExists().create()


// General
schema.propertyKey('created').Timestamp().ifNotExists().create()

// Campaign
schema.propertyKey('started').Timestamp().ifNotExists().create()
schema.propertyKey('ended').Timestamp().ifNotExists().create()
schema.propertyKey('doTwitter').Boolean().ifNotExists().create()
schema.propertyKey('doFacebook').Boolean().ifNotExists().create()
schema.propertyKey('doEmail').Boolean().ifNotExists().create()
schema.propertyKey('doPinterest').Boolean().ifNotExists().create()
schema.propertyKey('twitterMsg').Text().ifNotExists().create()
schema.propertyKey('facebookMsg').Text().ifNotExists().create()
schema.propertyKey('emailMsg').Text().ifNotExists().create()
schema.propertyKey('productLink').Text().ifNotExists().create()

//////////////////////////////////////////////////////////////////
// Verticies
//////////////////////////////////////////////////////////////////

schema.vertexLabel('TENANT').properties('tenantId','company', 'created').ifNotExists().create()
schema.vertexLabel('CONSULTANT').properties('created','fname','lname', 'address', 'zip','state','city','geolocation','phone','email','twitter','facebook','pintrest').ifNotExists().create()
schema.vertexLabel('BRAND').properties('created', 'name','link').ifNotExists().create()
schema.vertexLabel('PRODUCT').properties('created','productName','description','productId', 'link').ifNotExists().create()
schema.vertexLabel('CONTACT').properties('created','fname','lname', 'address', 'zip','state','city','geolocation','phone','email','twitter','facebook','pintrest').ifNotExists().create()
schema.vertexLabel('CAMPAIGN').properties('created', 'started','ended','doTwitter','doFacebook','doEmail','doPinterest','twitterMsg','facebookMsg','emailMsg','productLink').ifNotExists().create()
schema.vertexLabel('CAMPAIGN_RESULTS').properties('created').ifNotExists().create()

//////////////////////////////////////////////////////////////////
// Edges
//////////////////////////////////////////////////////////////////

schema.edgeLabel('E_OWNER').connection('TENANT','CONSULTANT').ifNotExists().create()
schema.edgeLabel('E_CONSULTS').connection('TENANT','CONSULTANT').ifNotExists().create()
schema.edgeLabel('E_CAMPAIGN').connection('CONSULTANT','CAMPAIGN').ifNotExists().create()
schema.edgeLabel('E_RESULTS').connection('CAMPAIGN','CAMPAIGN_RESULTS').ifNotExists().create()
schema.edgeLabel('E_FOCUSBRAND').connection('CAMPAIGN','BRAND').ifNotExists().create()
schema.edgeLabel('E_FOCUSPRODUCT').connection('CAMPAIGN','PRODUCT').ifNotExists().create()
schema.edgeLabel('E_SELLS').connection('CONSULTANT','BRAND').ifNotExists().create()
schema.edgeLabel('E_PRODUCT').connection('BRAND','PRODUCT').ifNotExists().create()
schema.edgeLabel('E_INTERESTED').connection('CONTACT','PRODUCT').ifNotExists().create()
schema.edgeLabel('E_PURCHASED').connection('CONTACT','PRODUCT').ifNotExists().create()
schema.edgeLabel('E_CUSTOMER').connection('CONSULTANT','CONTACT').ifNotExists().create()
schema.edgeLabel('E_PARTICIPANT').connection('CAMPAIGN','CONTACT').ifNotExists().create()
schema.edgeLabel('E_LEAD').connection('CONSULTANT','CONTACT').ifNotExists().create()

////////////////////////////////////////////////////////////////////
//Indexes
///////////////////////////////////////////////////////////////////
schema.vertexLabel('TENANT').index('byTenantId').secondary().by('tenantId').add()

// Schema description
// Use to check that the schema is built as desired
schema.describe()
