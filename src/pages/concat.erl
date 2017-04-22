
-module(concat).

-export([concat/1])

-spec concat(List :: [[T]]) -> [T]

concat([[T]]) -> Acc : concat([tail]). 
