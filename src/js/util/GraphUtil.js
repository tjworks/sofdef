define([ ], function( ){
    
    function area2( x1,  y1, x2,  y2, x3,  y3) 
    {
      return (x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1);    
    }
  
    /**
     * Returns <code>true</code> if (x3, y3) lies between (x1, y1) and (x2, y2),
     * and false otherwise,  This test assumes that the three points are 
     * collinear, and is used for intersection testing.
     * 
     * @param x1  the x-coordinate of the first point.
     * @param y1  the y-coordinate of the first point.
     * @param x2  the x-coordinate of the second point.
     * @param y2  the y-coordinate of the second point.
     * @param x3  the x-coordinate of the third point.
     * @param y3  the y-coordinate of the third point.
     * 
     * @return A boolean.
     */
    function between( x1,  y1, 
                                   x2,  y2, 
                                   x3,  y3) 
    {
      if (x1 != x2) {
        return (x1 <= x3 && x3 <= x2) || (x1 >= x3 && x3 >= x2);   
      }
      else {
        return (y1 <= y3 && y3 <= y2) || (y1 >= y3 && y3 >= y2);   
      }
    }
  
    function contains(rect, point) {
        var x =point.x;
        var y =point.y;
        var x0 = rect.x;
        var y0 = rect.y;
        var w = rect.w;
        var h = rect.h;
        return (x >= x0 &&
                y >= y0 &&
               x < x0 + w &&
                y < y0 + h);
    }
    
    /**
     * Test if the line segment (x1,y1)-&gt;(x2,y2) intersects the line segment 
     * (x3,y3)-&gt;(x4,y4).
     *
     * @param x1 the first x coordinate of the first segment
     * @param y1 the first y coordinate of the first segment 
     * @param x2 the second x coordinate of the first segment
     * @param y2 the second y coordinate of the first segment
     * @param x3 the first x coordinate of the second segment
     * @param y3 the first y coordinate of the second segment
     * @param x4 the second x coordinate of the second segment
     * @param y4 the second y coordinate of the second segment
     * @return true if the segments intersect
     */
    function linesIntersect( x1,  y1,
                                         x2,  y2,
                                         x3,  y3,
                                         x4,  y4)
    {
      switch(arguments.length){
        case 2:
              break;
        case 4:
              break;
        case 8:
              break;
        default: throw "Invalid length of arguments"
      }
      

      var a1, a2, a3, a4;
    
      // deal with special cases
      if ((a1 = area2(x1, y1, x2, y2, x3, y3)) == 0.0) 
      {
        // check if p3 is between p1 and p2 OR
        // p4 is collinear also AND either between p1 and p2 OR at opposite ends
        if (between(x1, y1, x2, y2, x3, y3)) 
        {
          return true;
        }
        else 
        {
          if (area2(x1, y1, x2, y2, x4, y4) == 0.0) 
          {
            return between(x3, y3, x4, y4, x1, y1) 
                   || between (x3, y3, x4, y4, x2, y2);
          }
          else {
            return false;
          }
        }
      }
      else if ((a2 = area2(x1, y1, x2, y2, x4, y4)) == 0.0) 
      {
        // check if p4 is between p1 and p2 (we already know p3 is not
        // collinear)
        return between(x1, y1, x2, y2, x4, y4);
      }
    
      if ((a3 = area2(x3, y3, x4, y4, x1, y1)) == 0.0) {
        // check if p1 is between p3 and p4 OR
        // p2 is collinear also AND either between p1 and p2 OR at opposite ends
        if (between(x3, y3, x4, y4, x1, y1)) {
          return true;
        }
        else {
          if (area2(x3, y3, x4, y4, x2, y2) == 0.0) {
            return between(x1, y1, x2, y2, x3, y3) 
                   || between (x1, y1, x2, y2, x4, y4);
          }
          else {
            return false;
          }
        }
      }
      else if ((a4 = area2(x3, y3, x4, y4, x2, y2)) == 0.0) {
        // check if p2 is between p3 and p4 (we already know p1 is not
        // collinear)
        return between(x3, y3, x4, y4, x2, y2);
      }
      else {  // test for regular intersection
        return ((a1 > 0.0) ^ (a2 > 0.0)) && ((a3 > 0.0) ^ (a4 > 0.0));
      } 
    } // end intersects
    
    
    function getIntersection(line1, line2){
        if(!linesIntersect( line1.source.x, line1.source.y, line1.target.x, line1.target.y, 
                            line2.source.x, line2.source.y, line2.target.x, line2.target.y))
                            return null;
        //A = y2-y1; B = x1-x2; C = A*x1+B*y1
        var A1,A2, B1, B2, C1, C2;
        A1 =  line1.target.y - line1.source.y
        B1 =  line1.source.x - line1.target.x
        C1 =  A1 * line1.source.x + B1 * line1.source.y   
        
        
        A2 =  line2.target.y - line2.source.y
        B2 =  line2.source.x - line2.target.x
        C2 =  A2 * line2.source.x + B2 * line2.source.y   
        
        
        var delta = A1*B2 - A2*B1;
        if(delta == 0) 
            throw  "Lines are parallel";
        
        var x = (B2*C1 - B1*C2)/delta;
        var y = (A1*C2 - A2*C1)/delta;
        return {x:x, y:y};
    }

    return {
      linesIntersect: linesIntersect,
      getIntersection: getIntersection,
      contains:contains
    }
    
}); // end require.js define()

