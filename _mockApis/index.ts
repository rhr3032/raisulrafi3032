import mock from './mockAdapter';

import  './projects/ProjectsData';
import  './blogs/blogsData';
import  './services/ServicesData';

mock.onAny().passThrough();
